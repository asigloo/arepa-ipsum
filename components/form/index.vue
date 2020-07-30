<template>
  <div class="p-6 text-gray-700 text-base">
    <dynamic-form
      :id="form.id"
      :fields="form.fields"
      @submit="handleSubmit"
      @error="handleError"
    />
    <div class="flex justify-end">
      <button type="submit" :form="form.id" class="btn btn-aguacate">
        {{ $t('generate') }}
      </button>
    </div>
  </div>
</template>

<script>
import { FormField, FormValidation, min } from '@asigloo/vue-dynamic-forms';
const computed = {
  currentLocale() {
    return this.$i18n.locale;
  },
};
const data = function() {
  return {
    form: {
      id: 'formIpsum',
      fields: [
        new FormField({
          name: 'paragraphs',
          type: 'number',
          label: this.$i18n.t('paragraphs', this.currentLocale),
          value: 1,
          min: 0,
          validations: [
            new FormValidation(
              min(1),
              this.$i18n.t('paragraphs-validation', this.currentLocale),
            ),
          ],
        }),
        new FormField({
          name: 'spicy',
          type: 'checkbox',
          label: `${this.$i18n.t('spicy', this.currentLocale)} 🌶`,
        }),
        new FormField({
          name: 'startWithArepa',
          type: 'checkbox',
          label: `${this.$i18n.t('starts-with-arepa', this.currentLocale)}`,
          value: true,
        }),
      ],
    },
  };
};

const methods = {
  handleSubmit({ paragraphs, spicy, startWithArepa }) {
    this.$router.push({
      path: '/result',
      query: { paragraphs, spicy, startWithArepa },
    });
  },
  handleError(error) {
    console.log(error);
  },
};
export default {
  name: 'arepaForm',
  data,
  methods,
};
</script>

<style></style>
