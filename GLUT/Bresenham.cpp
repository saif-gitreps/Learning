#include<windows.h>
#include<GL/glut.h>
#include<stdlib.h>
#include<stdio.h>

float x0,y0,x1,y1,x,y;

void display(void)
{
    glBegin(GL_POINTS);
    
    float dx = x1 - x0;
    float dy = y1 - y0;
    
    float di = 2 * dy - dx;
    
    glVertex2f(x0, y0);
    
    for(int i = 0; i < dx; i++) {
        if (di < 0) {
            x = x0 + 1;
            y = y0;
            glVertex2f(x, y);
            di = di + 2 * dy;
        } else {
            x = x0 + 1;
            y = y0 + 1;
            glVertex2f(x, y);
            di= di + 2 * dy - 2 * dx;
        }
        
        x0 = x;
        y0 = y;
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
    glutCreateWindow("___");
    init();
    glutDisplayFunc(display);
    glutMainLoop();

return 0;
}
