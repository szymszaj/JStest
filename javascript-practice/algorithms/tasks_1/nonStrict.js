function nonStrict() {
  console.log(this);
}

function strict() {
  "use strict";
  console.log(this);
}

strict();

const obj = {
  method() {
    "use strict";
    console.log(this);
  },
};
obj.method();
