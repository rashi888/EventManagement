import React from "react";
import Navbar from "../Navbar/Navbar";

const AboutUs = () => {
  const generateCreators = () => {

    const creater = new Map([
      [
        "Shivam Jain",
        "https://media.licdn.com/dms/image/D4E03AQHl6poXAemYKg/profile-displayphoto-shrink_400_400/0/1681451107242?e=1707350400&v=beta&t=CxAnPRmq8SPsHVqXXyJQ9NpccA2endXN5iFl_SG-1w8",
      ],
      [
        "Rashi Dixit",
        "https://media.licdn.com/dms/image/D4D03AQG20aIO0U8ASQ/profile-displayphoto-shrink_200_200/0/1699121928621?e=1707350400&v=beta&t=mZpnqqwPObzWdNWqpwn0IyEvuk0dnKF8I0I2d62n7_o",
      ],
      [
        "Ram",
        "https://media.licdn.com/dms/image/D4E03AQHl6poXAemYKg/profile-displayphoto-shrink_400_400/0/1681451107242?e=1707350400&v=beta&t=CxAnPRmq8SPsHVqXXyJQ9NpccA2endXN5iFl_SG-1w8",
      ],
    ]);
    var i = 1;
    const creators = [];
    creater.forEach((values, keys) => {
      const creator = {
        id: i++,
        name: keys,
        image: values,
      };
      creators.push(creator);
    });
    return creators;
  };

  const creators = generateCreators();

  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Creators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {creators.map((creator) => (
              <div
                key={creator.id}
                className="bg-white rounded-lg shadow-md p-2 text-center"
              >
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="rounded-full h-24 w-24 mx-auto mb-4"
                />
                <p className="text-lg font-medium">{creator.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
