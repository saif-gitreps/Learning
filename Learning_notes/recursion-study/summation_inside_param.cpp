// ok so here we pass a sum=0 variable and as i is decresing per call
// we also adding the i to the sum. and once the base case hits,
// we return the final sum but while returning , nothing is changed.
int f2(int i,int sum){
   if(i<1){
      return sum;
   }
   return f2(i-1,sum+i);
}
