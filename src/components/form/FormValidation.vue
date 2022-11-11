<template>
  <div class="q-pl-md">
    <div class="q-mt-md q-gutter-md" style="max-width: 300px">
      <Form
          :initial-values="initialValues"
          :validation-schema="schema"
          @submit="onSubmit"
      >
        <!-- You can use the field component to wrap a q-* component -->
        <!-- Do this if you have only one or a few places that need validation -->
        <Field name="email" v-slot="{ errorMessage, value, field }">
          <q-input
              label="Email"
              placeholder="user@example.com"
              :model-value="value"
              v-bind="field"
              :error-message="errorMessage"
              :error="!!errorMessage"
          />
        </Field>

        <!-- Or compose vee-validate's validation into your q-* components -->
        <!-- Do this if you plan to have validation frequently throughout your app -->
        <QInputWithValidation
            name="fullName"
            label="Full name"
            placeholder="John Doe"
        />

        <QInputWithValidation
            label="Password"
            name="password"
            placeholder="p@$$vv0Rd"
        />

        <div class="q-gutter-sm">
          <!-- The same techniques can be applied to q-* form elements that do not extend the `q-field` component like checkboxes -->
          <!-- It requires you to wrap your `q-checkbox` with `q-field` to be able to assign validation state to them -->
          <!-- This can be too much markup sometimes, consider using `useField` instead to create your own "validated" checkbox component on top of quasar -->
          <!-- this is shown in the next "subscribed"  field-->
          <Field
              name="terms"
              type="checkbox"
              :value="true"
              :unchecked-value="false"
              v-slot="{ errorMessage, value, field }"
          >
            <q-field
                :borderless="true"
                :error="!!errorMessage"
                :error-message="errorMessage"
            >
              <q-checkbox
                  label="Agree to terms and conditions"
                  :model-value="value"
                  v-bind="field"
              />
            </q-field>
          </Field>
        </div>

        <div class="q-gutter-sm">
          <!-- Easier to manage and to update, use this technique if you are going to have a lot of checkboxes in your app -->
          <QCheckboxWithValidation
              name="subscribed"
              label="Subscribe to latest news"
          />
        </div>

        <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
      </Form>
    </div>
  </div>
</template>

<script>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import QInputWithValidation from "./inputs/QInputWithValidation";
import QCheckboxWithValidation from "./inputs/QCheckboxWithValidation";
import { rules } from "@/shared/form-presets"

export default {
  name: "FormValidation",
  components: {
    Field,
    Form,
    QInputWithValidation,
    QCheckboxWithValidation,
  },
  setup() {

    /**
     * construct form schema
     * @returns {*}
     */
    const schema = (() => {

      const { email } = rules

      return yup.object( { email } )
    })()


    const initialValues = {
      terms: false,
      subscribed: false,
    };

    function onSubmit(values, actions) {
      actions.resetForm();
    }

    return {
      onSubmit,
      schema,
      initialValues,
    };
  },
};
</script>
