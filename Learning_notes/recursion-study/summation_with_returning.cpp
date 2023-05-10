int f(int n){
   if(n==1){
      return 1;
   }
   return n+f(n-1);    
}
// in this , after the base case is hit, we are gonna return 1.
// that 1 + the N that was still hanging in the recursion call.
// that returns to another n+ returning recusrion sum.
