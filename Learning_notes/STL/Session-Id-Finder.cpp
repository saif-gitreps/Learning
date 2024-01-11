
#include <iostream>

using namespace std;

int main(){
    string sessionId = "wELy_YQgXAJ9N8Jsgz0CfXWaJLtdgsTv";
    string cookieValue = "s%3AwELy_YQgXAJ9N8Jsgz0CfXWaJLtdgsTv.I0GDH%2B5YEwN0Jlro0GndnUrXQ0x8WjyblIdYDliw5Yc";

    int pos = cookieValue.find(sessionId);

    cout<<cookieValue.substr(pos, sessionId.size());    

    return 0;
}