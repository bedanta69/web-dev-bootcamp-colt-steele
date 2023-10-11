//string methods
let a = "leave me alone";
a.toUpperCase(); // converts each letter in a to uppercase .toLowerCase() does it to lowercase

let b = '       where are you';
b.trim(); //removes unwanted spaces

// we can also chain string methods together for example:
b.trim().toUpperCase();
a.indexOf("leave");//gives us the starting index number number of the string
a.slice(0, 8); //slices the string form the starting index mentioned to the ending index mentioned
a.replace("leave", "lololol");//replaces the first string mentioned to the second string mentioned
a.repeat(14);//repeats thee string the number of times it is mentioned
