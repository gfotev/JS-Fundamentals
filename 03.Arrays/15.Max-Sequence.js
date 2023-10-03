function maxSequence(array) {

    let result = 0;
    let count = 1;
    let firstSequenceCount = 0;
    let longestSequenceCount = 0;
    let innerNum = 0;
    let outerNum = 0;

    for (let i = 0; i <= array.length - 1; i += 1) {
        outerNum = array[i]
        count = 1;

        for (let j = i + 1; j <= array.length - 1; j += 1) {
            innerNum = array[j];

            if (outerNum == innerNum) {
                count += 1;
            } else {

                break;
            }

            if (count > firstSequenceCount) {
                firstSequenceCount = count;
            }

            if (firstSequenceCount > longestSequenceCount) {
                longestSequenceCount = firstSequenceCount;
                result = String(outerNum) + " ";
            } 
        }
    }
    console.log(result.repeat(longestSequenceCount));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])