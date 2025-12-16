//your code here
function zero_one_two_sorting(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    const swap = (i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    while (mid <= high) {
        if (arr[mid] === 0) {
            swap(low, mid);
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            swap(mid, high);
            high--;
        }
    }
}