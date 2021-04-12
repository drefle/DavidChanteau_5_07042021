exports.find = () => {
  var cameras = [
    {
      _id: "d51aa1fcf97c638e4fb09e39cb664a39",
      name: "Zurss 50S",
      price: "49900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["35mm 1.4", "50mm 1.6"],
      imageUrl: "vcam_1.jpg"
    },
    {
      _id: "d24d17e38303040df00c574b151b424a",
      name: "Hirsch 400DTS",
      price: "309900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["50mm 1.8", "60mm 2.8", "24-60mm 2.8/4.5"],
      imageUrl: "vcam_2.jpg"
    },
    {
      _id: "be91555c88459dad0cf9ce950a7aee88",
      name: "Franck JS 105",
      price: "209900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["25mm 4.5"],
      imageUrl: "vcam_3.jpg"
    },
    {
      _id: "b0cbaea56f81efcec1d67140ddf65ea0",
      name: "Kuros TTS",
      price: "159900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["50mm 1.7", "35mm 1.4"],
      imageUrl: "vcam_4.jpg"
    },
    {
      _id: "86de343190d44fdc48a3b1531a3dc92f",
      name: "Katatone",
      price: "59900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["50mm 1.4", "35mm 1.8", "28-200mm 2.8/4.5"],
      imageUrl: "vcam_5.jpg"
    }
  ];
  return new Promise((resolve, reject) => resolve(cameras));
}

exports.findById = (id) => {
  var cameras = [
    {
      _id: "d51aa1fcf97c638e4fb09e39cb664a39",
      name: "Zurss 50S",
      price: "49900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["35mm 1.4", "50mm 1.6"],
      imageUrl: "vcam_1.jpg"
    },
    {
      _id: "d24d17e38303040df00c574b151b424a",
      name: "Hirsch 400DTS",
      price: "309900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["50mm 1.8", "60mm 2.8", "24-60mm 2.8/4.5"],
      imageUrl: "vcam_2.jpg"
    },
    {
      _id: "be91555c88459dad0cf9ce950a7aee88",
      name: "Franck JS 105",
      price: "209900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["25mm 4.5"],
      imageUrl: "vcam_3.jpg"
    },
    {
      _id: "b0cbaea56f81efcec1d67140ddf65ea0",
      name: "Kuros TTS",
      price: "159900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["50mm 1.7", "35mm 1.4"],
      imageUrl: "vcam_4.jpg"
    },
    {
      _id: "86de343190d44fdc48a3b1531a3dc92f",
      name: "Katatone",
      price: "59900",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit neque nulla, sed pharetra eros dictum in. Fusce convallis ullamcorper tincidunt. Suspendisse potenti. Nullam felis leo, sollicitudin quis neque ac, aliquam pulvinar dolor. Praesent vel enim vitae est eleifend fringilla pretium lacinia erat. Proin pellentesque eros condimentum nulla vulputate, nec tincidunt eros euismod. Quisque non ullamcorper nisl. Aenean convallis, ligula eu volutpat tempor, mauris massa egestas odio, et malesuada nulla libero ac elit.",
      lenses: ["50mm 1.4", "35mm 1.8", "28-200mm 2.8/4.5"],
      imageUrl: "vcam_5.jpg"
    }
  ];
  return new Promise((resolve, reject) =>
    resolve(teddies.find(cameras =>
      camera._id == id)
    )
  );
}