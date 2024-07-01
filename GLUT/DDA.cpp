#include<windows.h>
#include<GL/glut.h>
#include<stdlib.h>
#include<stdio.h>

float x0,y0,x1,y1,x,y;

void display(void)
{
    glBegin(GL_POINTS);
    
    float dx = (x1 - x0);
    float dy = (y1 - y0);
    float m =  dy/ dx;
    
    if(abs(m) <= 1){
        for(x = x0; x <= x1; x += 1){
            y = y + m;
            glVertex2f(x, y);
        }
    }
    else{
        for(y = y0; y <= y1; y += 1){
            x =x + (1 / m);
            glVertex2f(x, y);
        }
    }
    
    glEnd();
    glFlush();
    
}

void init(void) {
    glClear(GL_COLOR_BUFFER_BIT);
    glClearColor(0,0,0,0);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-100,100,-100,100);
}

int main(int argc, char** argv)
{
    printf("Enter the First coordinate of the points: \n");
     scanf("%f %f", &x0,&y0);
     
     printf("Enter the Second coordinate of the points: \n");
    scanf("%f %f", &x1,&y1);
    
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500,500);
    glutInitWindowPosition(100,100);
    glutCreateWindow("_");
    init();
    glutDisplayFunc(display);
    glutMainLoop();

return 0;
}
