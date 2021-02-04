//Joshua Chan CIS 4339 1588459
let courses = ["CIS4339","CIS4338", "HRD3351", "CIS3320", "CIS4375"];
let i;
for (i = 0; i < courses.length; i++){
   console.log(courses[i]);
}
let count;
let newTrapArea = [];
for (count = 1; count < 11; count++)
{
    let index = count;
    let height = index / 2;
    let baseA = height * 4;
    let baseB = index;
    let area = ((baseA + baseB) / 2) * height;
    let trapArea = [
        {
        trapIndex : index,
        trapHeight : height,
        trapBaseA : baseA,
        trapBaseB : baseB,
        trapArea : area,
    }
    ];
    newTrapArea.push.apply(newTrapArea, trapArea);
};
console.log(newTrapArea);

let onlyBase20 = newTrapArea.filter(function (e) {
    return e.trapBaseA === 20;
});
console.log(onlyBase20);

let allHeight = newTrapArea.map(a => a.trapHeight);
console.log(allHeight);