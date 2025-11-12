import React from "react";
import LinkButton from "../../../components/LinkButton";
// Sample data for the detox ONE food item
const sample = {
  title: "Beef Steak with Fried Potato",
  type: "Lunch",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  rating: 4.9,
  ingredients: [
    "2 tablespoons butter, softened, divided",
    "1 teaspoon minced fresh parsley",
    "1/2 teaspoon minced garlic",
    "1/4 teaspoon reduced-sodium soy sauce",
    "1 beef flat iron steak or boneless top sirloin steak (3/4 pound)",
    "1/8 teaspoon salt",
    "1/8 teaspoon pepper",
  ],
  nutrition: [
    "Calories: 217",
    "Water: 61%",
    "Protein: 26.1 grams",
    "Carbs: 0 grams",
    "Sugar: 0 grams",
    "Fiber: 0 grams",
    "Fat: 11.8 grams",
  ],
  comments: [
    {
      name: "Samantha W.",
      text: "Sed eligendi facere repellendus. Ipsum ipsum incidunt minima harum tenetur.",
      time: "5 days ago",
    },
    {
      name: "Karen Hope",
      text: "Sed eligendi facere repellendus. Ipsum ipsum incidunt minima harum tenetur.",
      time: "5 days ago",
    },
    {
      name: "Tony Soap",
      text: "Sed eligendi facere repellendus. Ipsum ipsum incidunt minima harum tenetur.",
      time: "5 days ago",
    },
    {
      name: "Tony Soap",
      text: "Sed eligendi facere repellendus. Ipsum ipsum incidunt minima harum tenetur.",
      time: "5 days ago",
    },
  ],
};

const ViewDetoxFood = () => {
  return (
    <div className="max-w-screen mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-admin_text_color">
          For Member, Detox Food Details
        </h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">Helen</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - details (span 2) */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm  ">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="w-full md:w-56 h-36 bg-green-700 rounded-md flex items-center justify-center">
              {/* image placeholder */}
              <img
                src="/assets/detox-food-example.png"
                alt=""
                className="px-4 py-5 h-[150px] object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 justify-between">
                <div>
                  <h2 className="text-xl font-bold text-admin_text_color">
                    {sample.title}
                  </h2>
                  <div className="mt-2">
                    <span className="inline-block bg-green-800 text-gray-200 px-3 py-1 rounded-full text-sm">
                      {sample.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Rating</div>
                  <div className="text-2xl font-bold text-yellow-500">
                    {sample.rating}
                  </div>
                </div>
              </div>

              <p className="text-gray-500 mt-4">{sample.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            <div>
              <h3 className="font-bold text-admin_text_color mb-2">
                Ingredients
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {sample.ingredients.map((data, i) => (
                  <li key={i} className="py-1">
                    {data}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-admin_text_color mb-2">
                Nutrition:
              </h3>
              <ul className="text-gray-600 list-disc list-inside text-sm">
                {sample.nutrition.map((data, i) => (
                  <li key={i} className="py-1">
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right - comments */}
        <div className="lg:col-span-1  rounded-lg ">
          <h4 className="font-bold text-lg text-admin_text_color">
            Members Comments
          </h4>
          <div className="rounded-lg mb-4 ">
            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-2 ">
              {sample.comments.map((c, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-3 items-start bg-white shadow-sm p-5 rounded "
                >
                  <img src="/assets/Quote.png" alt="" />
                  <p className="text-sm text-admin_text_color">{c.text}</p>
                  <div className="flex flex-row gap-3 items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {c.name.split(" ")[0][0]}
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-xs text-admin_text_color font-bold">
                        {c.name}
                      </span>
                      <span className="text-xs text-gray-400">{c.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="mb-3">
              <h5 className="font-semibold text-gray-800">Leave a comment</h5>
            </div>
            <textarea
              className="w-full border rounded p-3 text-sm mb-3 resize-none"
              rows={4}
              placeholder="Write your comment..."
            />
            <LinkButton text="Submit Comment" className="w-full" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewDetoxFood;
