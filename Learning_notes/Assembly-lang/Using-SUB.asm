
org 100h

.DATA
X DB ?
Y DB ? 

.CODE


MAIN PROC
    ;PROGRAM TO DIVIDE 2 NUMBER
         
    MOV AX,8
    MOV CL,2
    DIV CL
    ADD AX,48
    
    MOV AH,2
    ;MOV DL,20H
    ;INT 21H
    MOV DX,AX
    INT 21H

ret




