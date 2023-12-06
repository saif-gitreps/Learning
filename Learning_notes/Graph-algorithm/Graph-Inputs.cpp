void matrix(){
  int n , m;
    cin>> n >> m;
    // for weighted graph:
    int adj[n+1][m+1];
    for(int i = 0; i < m; i++){
        int u, v;
        cin>> u >> v;
        adj[u][v] = weight;
        adj[v][u] = weight;
    }
}

void list(){
  int n , m;
  cin>> n >> m;
  vector<int> adj[n+1];
    for(int i - 0; i < m ; i++){
        //in list, we just store a pair{node,weight} if it is weighted. 
        int u,v;
        cin>> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
}

int main(){
  court<< "hello :D" ;
}
