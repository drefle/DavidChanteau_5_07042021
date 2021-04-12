

exports.find = () => {
  var furnitures = [
    {
      _id: "d51aa1fcf97c638e4fb09e39cb664a39",
      name: "Cross Table",
      price: "59900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Brown", "white"],
      imageUrl: "oak_1.jpg"
    },
    {
      _id: "d24d17e38303040df00c574b151b424a",
      name: "Coffee Table",
      price: "89900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Chocolate", "Tan", "Black"],
      imageUrl: "oak_2.jpg"
    },
    {
      _id: "be91555c88459dad0cf9ce950a7aee88",
      name: "Dining Table (extandable)",
      price: "109900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Yellow", "Red"],
      imageUrl: "oak_3.jpg"
    },
    {
      _id: "b0cbaea56f81efcec1d67140ddf65ea0",
      name: "Bench",
      price: "39900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Blue", "Purple", "Pink"],
      imageUrl: "oak_4.jpg"
    },
    {
      _id: "86de343190d44fdc48a3b1531a3dc92f",
      name: "Vintage Chair",
      price: "5500",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Green", "White"],
      imageUrl: "oak_5.jpg"
    }
  ];
  return new Promise((resolve, reject) => resolve(furnitures));
}

exports.findById = (id) => {
  var furnitures = [
    {
      _id: "d51aa1fcf97c638e4fb09e39cb664a39",
      name: "Cross Table",
      price: "59900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Brown", "white"],
      imageUrl: "oak_1.jpg"
    },
    {
      _id: "d24d17e38303040df00c574b151b424a",
      name: "Coffee Table",
      price: "89900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Chocolate", "Tan", "Black"],
      imageUrl: "oak_2.jpg"
    },
    {
      _id: "be91555c88459dad0cf9ce950a7aee88",
      name: "Dining Table (extandable)",
      price: "109900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Yellow", "Red"],
      imageUrl: "oak_3.jpg"
    },
    {
      _id: "b0cbaea56f81efcec1d67140ddf65ea0",
      name: "Bench",
      price: "39900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Blue", "Purple", "Pink"],
      imageUrl: "oak_4.jpg"
    },
    {
      _id: "86de343190d44fdc48a3b1531a3dc92f",
      name: "Vintage Chair",
      price: "5500",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["Green", "White"],
      imageUrl: "oak_5.jpg"
    }
  ];
  return new Promise((resolve, reject) =>
    resolve(teddies.find(furnitures =>
      furniture._id == id)
    )
  );
}