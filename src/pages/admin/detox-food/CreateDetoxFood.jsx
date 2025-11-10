import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Upload } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { detoxSchema } from "../../../components/FormSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateDetoxFood = () => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const form = useForm({
    resolver: yupResolver(detoxSchema),
    defaultValues: {
      email: "",
      foodTitle: "",
      ingredients: [""],
      nutrition: [""],
      type: "",
      description: "",
      weeklyList: "",
    },
  });
  const { handleSubmit, setValue, register, control } = form;

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: nutritionFields,
    append: appendNutrition,
    remove: removeNutrition,
  } = useFieldArray({
    control,
    name: "nutrition",
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("photo", file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (values) => {
    const payload = {
      ...values,
      photo: values.photo ? values.photo : null,
      ingredients: values.ingredients.filter((item) => item.trim() !== ""),
      nutrition: values.nutrition.filter((item) => item.trim() !== ""),
    };
    console.log("Form Data:", payload);
  };

  return (
    <div className="max-w-screen mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-admin_text_color">
          Detox Food Create
        </h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">Helen</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold text-admin_text_color mb-6">
              Food Menu
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-quatinery mb-2">
                  Photo <span className="text-red-500">*</span>
                </label>
                <div
                  className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-green-500 transition-colors"
                  onClick={() => document.getElementById("detox-photo").click()}
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="preview"
                      className="mx-auto h-40 w-40 object-cover rounded"
                    />
                  ) : (
                    <>
                      <Upload
                        className="mx-auto mb-2 text-gray-400"
                        size={36}
                      />
                      <p className="text-sm text-gray-500">
                        Drag and drop or click here to select file
                      </p>
                    </>
                  )}
                  <input
                    id="detox-photo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 5MB</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <div>
                        <label className="block text-sm font-medium text-quatinery mb-2">
                          Email
                        </label>
                        <FormControl>
                          <Input placeholder="email@address.com" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </div>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="foodTitle"
                    render={({ field }) => (
                      <div>
                        <label className="block text-sm font-medium text-quatinery mb-2">
                          Food Title
                        </label>
                        <FormControl>
                          <Input
                            placeholder="e.g. Green Detox Salad"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </div>
                    )}
                  />

                  {/* Ingredients as dynamic list */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-quatinery mb-2">
                      Ingredients
                    </label>
                    <div className="space-y-2">
                      {ingredientFields.map((field, index) => (
                        <div key={field.id} className="flex gap-2">
                          <Input
                            {...register(`ingredients.${index}`)}
                            defaultValue={field || ""}
                            className="flex-1 px-3 py-2 border rounded"
                            placeholder={`Ingredient ${index + 1}`}
                          />

                          <button
                            type="button"
                            onClick={() => removeIngredient(index)}
                            className="px-3 rounded bg-red-50 text-red-600 border border-red-100"
                          >
                            ×
                          </button>
                        </div>
                      ))}

                      <div>
                        <button
                          type="button"
                          onClick={() => appendIngredient("")}
                          className="px-3 py-1 rounded bg-green-600 text-white text-sm"
                        >
                          + Add Ingredient
                        </button>
                      </div>
                    </div>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </div>
                  {/* Nutrition dynamic list */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nutrition
                    </label>
                    <div className="space-y-2">
                      {nutritionFields.map((field, index) => (
                        <div key={field.id} className="flex gap-2">
                          <Input
                            {...register(`nutrition.${index}`)}
                            defaultValue={field || ""}
                            className="flex-1 px-3 py-2 border rounded"
                            placeholder={`Nutrition ${index + 1}`}
                          />
                          <button
                            type="button"
                            onClick={() => removeNutrition(index)}
                            className="px-3 rounded bg-red-50 text-red-600 border border-red-100"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <div>
                        <button
                          type="button"
                          onClick={() => appendNutrition("")}
                          className="px-3 py-1 rounded bg-green-600 text-white text-sm"
                        >
                          + Add Nutrition
                        </button>
                      </div>
                    </div>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <FormField
                    control={form.control}
                    name="weeklyList"
                    render={({ field }) => (
                      <div>
                        <label className="block text-sm font-medium text-quatinery mb-2">
                          Weekly food List to Submit by Coach
                        </label>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={9}
                            className="w-full  py-4  border rounded-md resize-none"
                            placeholder="Weekly menu"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </div>
                    )}
                  />
                  <div className="flex flex-col gap-3">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-quatinery mb-2">
                            Type
                          </label>
                          <FormControl>
                            <Input
                              placeholder="Lunch / Dinner / Snack"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-quatinery mb-2">
                            Description
                          </label>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={6}
                              className="w-full  border rounded-md resize-none"
                              placeholder="Short description"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateDetoxFood;
