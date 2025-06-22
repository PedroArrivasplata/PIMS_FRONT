<template>
  <div class="vet-pet-item">
    <label>
      <input type="radio" :name="radioName" :checked="checked" @change="$emit('select', pet)" />
      <div class="d-flex align-items-center">
        <img :src="pet.img" :alt="pet.name" class="vet-pet-avatar" />
        <div>
          <h4>{{ pet.name }}</h4>
          <p class="text-muted">{{ pet.breed }} - {{ pet.age }}</p>
          <p>ID: {{ pet.id }}</p>
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
