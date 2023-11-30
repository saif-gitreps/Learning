
org 100h

.DATA
X DB ?
Y DB ? 

.CODE


MAIN PROC
    ;PROGRAM TO MULTIPLY 2 NUMBER WHERE PRODUCT <= 9
    MOV AX, @DATA
    MOV DS,AX
    
    MOV AH,1
    INT 21H
    MOV X,AL
    INT 21H
    MOV Y,AL
    
    SUB X,48
    SUB Y,48
       
    MOV AL,X
    MOV CL,Y
    MUL CL
    ADD AX,48
    
    MOV AH,2
    ;MOV DL,20H
    ;INT 21H
    MOV DX,AX
    INT 21H

ret




