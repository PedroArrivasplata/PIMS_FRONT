<template>
  <div class="vet-pet-item">
    <label>
      <input type="radio" :name="radioName" :checked="checked" @change="$emit('select', pet)" />
      <div class="d-flex align-items-center">
        <img :src="pet.img" :alt="pet.name" class="vet-pet-avatar" />
        <div>
          <h3>{{ pet.name }}</h3>
          <h4 class="text-muted">{{ pet.breed }} - {{ pet.age }}</h4>
          <p> </p>
          <p><strong>Propietario:</strong> {{ pet.propietario }}</p>
          <p><strong>ID mascota:</strong> {{ pet.id }}</p>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'VetPetItem',
  props: {
    pet: {
      type: Object,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    radioName: {
      type: String,
      default: 'paciente'
    }
  }
}
</script>

<style scoped>
</style>
