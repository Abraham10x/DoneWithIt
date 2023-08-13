import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import colors from "../config/colors";
import {AppForm, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/form"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  description: Yup.string().required().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const category = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          autoCapitalize="words"
          autoCorrect={false}
          name="title"
          keyboardType="default"
          placeholder="Title"
          textContentType="name"
        />
        <FormField
          maxLength={255}
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          width="40%"
        />
        <Picker
          width="60%"
          placeholder="Category"
          items={category}
        />
        <FormField
          multiline
          numberOfLine={3}
          autoCapitalize="sentences"
          autoCorrect={false}
          name="description"
          keyboardType="default"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 10,
  },
});

export default ListingEditScreen;
