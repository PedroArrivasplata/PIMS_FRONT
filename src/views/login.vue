<template>
  <div class="login-body">
    <video autoplay muted loop id="background-video">
      <source src="../assets/happy_dog.png" type="img">
    </video>
    <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center position-relative" style="z-index:1;">
      <div class="row w-100 justify-content-center align-items-center">
        <!-- Imagen izquierda -->
        <div class="col-md-4 d-none d-md-flex justify-content-center align-items-center">
          <img src="../assets/happy_dog.png" alt="perrito" class="mascota-img-side" />
        </div>
        <!-- Formulario de inicio de sesión -->
        <div class="col-12 col-md-4 d-flex flex-column align-items-center">
          <main class="login-container animate__animated animate__fadeInDown w-100">
            <div class="text-center mb-3">
              <i class="bi bi-person-circle login-icon"></i>
            </div>
            <h1 class="text-center fs-2 fw-bold mb-2">Bienvenidos</h1>
            <h2 class="text-center fs-4 fw-bold mb-4 text-primary">a Medical Vice</h2>
            <form @submit.prevent="iniciarSesion" class="w-100" style="max-width:350px;margin:auto;">
              <div v-if="mensaje" class="alert alert-danger alert-dismissible fade show" role="alert">
                {{ mensaje }}
                <button type="button" class="btn-close" @click="mensaje = ''" aria-label="Cerrar"></button>
              </div>
              <!-- Campo de usuario -->
              <div class="input-group mb-3">
                <span class="input-group-text login-input-icon">
                  <i class="bi bi-person-fill"></i>
                </span>
                <input type="text" class="form-control" placeholder="Ingresa tu usuario" v-model="correo" required />
              </div>
              <!-- Campo de contraseña -->
              <div class="input-group mb-3">
                <span class="input-group-text login-input-icon">
                  <i class="bi bi-lock-fill"></i>
                </span>
                <input type="password" class="form-control" placeholder="Ingresa tu contraseña" v-model="clave" required />
              </div>
              <!-- Botón de inicio de sesión -->
              <button type="submit" class="btn login-btn w-100 fw-semibold shadow-sm mb-3">Iniciar Sesión</button>
            </form>
            <p class="text-center">
              ¿No tienes cuenta?
              <a href="../views/registrar_nuevo_usuario.php" class="text-primary">Regístrate aquí</a>
            </p>
          </main>
        </div>
        <!-- Imagen derecha -->
        <div class="col-md-4 d-none d-md-flex justify-content-center align-items-center">
          <img src="../assets/happy_cat.png" alt="gatito" class="mascota-img-side" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      correo: '',
      clave: '',
      mensaje: ''
    }
  },
  methods: {
    async iniciarSesion() {
      if (!this.correo || !this.clave) {
        this.mensaje = 'Debe ingresar usuario y contraseña.';
        return;
      }
      try {
        const response = await fetch('http://localhost/repo_oficial/PIMS_BACK/controllers/api_login.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ correo: this.correo, clave: this.clave })
        });
        if (response.status === 200) {
          const data = await response.json();
          const usuario = data.usuario;
          if (usuario.tipo_usuario === 'recepcionista') {
            window.location.href = '../views/oficial.html';
          } else if (usuario.tipo_usuario === 'veterinario') {
            // this.$emit('login-exitoso', usuario)
            console.log('Login exitoso:', usuario);
            // Cambia esto si usas Vue Router, si no, emite evento o redirige
            this.$router.push('/inicio');
          } else {
            window.location.href = '../views/oficial.php';
          }
        } else {
          const data = await response.json();
          this.mensaje = data.error || 'Usuario o contraseña incorrectos';
        }
      } catch (e) {
        console.error(e);
        this.mensaje = 'Error de conexión con el servidor.';
      }
    }
  }
}
</script>

<style>
@import '../styles_css/bootstrap.min.css';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
@import '../styles_css/styles.css';

.login-body {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background: #f8fafc;
}
.login-container {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 32px 0 rgba(0,0,0,0.08);
  padding: 2.5rem 2rem;
  min-width: 280px;
  max-width: 400px;
  margin: auto;
}


.mascota-img-side {
  max-width: 180px;
  height: auto;
}
#background-video {
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
@media (max-width: 991px) {
  .mascota-img-side {
    max-width: 120px;
  }
}
@media (max-width: 767px) {
  .login-container {
    padding: 1.5rem 0.5rem;
    min-width: 220px;
    max-width: 100vw;
  }
  .mascota-img-side {
    display: none;
  }
}
</style>