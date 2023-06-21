// ok so here we pass a sum=0 variable and as i is decresing per call
// we also adding the i to the sum. and once the base case hits,
// we return the final sum but while returning , nothing is changed.
int f2(int i,int sum){
   if(i<1){
      return sum;
   }
   return f2(i-1,sum+i);
}


==================================

void calculateSum(int N, int& sum) {
    if (N <= 0) {
        return;
    } else {
        sum += N;
        calculateSum(N - 1, sum);  
    }
}

int main() {
    int sum = 0;
    int N = 10;
    calculateSum(N, sum);
    cout << "Sum of numbers from 1 to " << N << " is: " << sum << endl;
    return 0;
}


