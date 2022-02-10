import React, { FC } from "react";

// interface ImProps {
//   title: String,
//   body: String
// }

const Cards: FC<{
  type?: "service" | "hospital";
// }> = ({ type}, props:ImProps) => {
}> = ({ type, title, body}) => {
  const cardType = type;
  return (
    <div>
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          {cardType == "service" ? (
            <div>
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {/* {props.title} */}
                  {title}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  {/* {props.body} */}
                  {body}
                </p>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
               {/* {props.title} */}
               {title}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                {/* {props.body} */}
                {body}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
