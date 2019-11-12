const dataArray = data.results.bindings;
const lengthObjects = dataArray.map(dataArray => dataArray.lengte.value);
let newArray = [];

const cleanData = lengthObjects.map(size => {
  size = size.toLowerCase();
  // regex expression which matches all characters except: l, numbers, '.' & whitespace
  size = size.replace(/[^l0-9\d\s,/.]/g, "");

  if (typeof size === "string") {
    size = size.replace(/,/g, ".");

    if (size.match(/[ˆ(\d|+|\-)]/g) === null) {
      return size.replace(size, "");
    }

    if (size.charAt(0) == "l") {
      size = size.slice(0, 7).replace(/[^0-9/.]/g, "");
    }

    // if first character of string is a number, slice vanaf het 3de character (omdat er geen lengtes zij van meer dan 4 cijfers)
    if (size.charAt(0) != NaN) {
      return size.slice(0, 3);
    }

    if (size === "") {
      delete size;
    }
  }
});

console.log(newArray);
console.log(cleanData);
