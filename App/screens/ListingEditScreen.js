import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import colors from "../config/colors";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/form";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/form/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  description: Yup.string().required().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least on image."),
});

const category = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#4baaf2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  { label: "Books", value: 8, backgroundColor: "purple", icon: "book" },
  { label: "Others", value: 9, backgroundColor: "grey", icon: "card" },
];

function ListingEditScreen() {
  const location = useLocation();
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
          numberOfColumns={3}
          width="60%"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
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
