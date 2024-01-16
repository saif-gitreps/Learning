#include<bits/stdc++.h>
// Q ) to find the sum of N queries in range L to R
int a[10000];
int pf[10000] = {0};

int prefix1dArray(){
    int n ;
    cin >> n;
    // take 1 based indexing for prefix sums.
    for(int i = 1 ; i <= n; i++){
        cin >> a[i];
        pf[i] = pf[i-1] + a[i];
    }
    int q;
    cin >> q;
    while(q --){
        int l, r;
        cin >> l >> r;
        cout << pf[r] - pf[l-1] << "\n"; 
    }
    return 0;
}

// Q) 2D , find sum from (a,b) to (c,d); 

int v[10000][10000];
long long pf2D[10000][10000];

int prefix2dArray(){
    int n ;
    cin>> n;
    // follow the forumla for 2d array prefix.
    for(int i = 1 ; i <= n; i++){
        for(int j = 1; j <= n ; j++){
            cin>> v[i][j];
            pf2D[i][k] = v[i][j] + 
                         pf2D[i-1][j] +
                         pf2D[i][j-1] +
                         pf2D[i-1][j-1];
        }
    }
    int q;
    cin >> q;
    while(q --){
        int A, B, C, D;
        cin >> A >> B >> C >> D;
        int ans = pf2D[C][D] -
                  pf2D[A-1][D] -
                  pf2D[C][B-1] -
                  pf2D[A-1][B-1];
        cout << ans;
    }
 
    return 0;
}