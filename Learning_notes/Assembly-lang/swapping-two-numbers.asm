
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt

org 100h

.DATA

A DB ?
B DB ?

.CODE

MOV AX,@DATA
MOV DS,AX

MOV AH,1
INT 21H
MOV A,AL
INT 21H
MOV B,AL

MOV BL,A
MOV CL,B

XCHG BL,CL

MOV AH,2
MOV DL,32
INT 21H
MOV DL,BL
INT 21H
MOV DL,CL
INT 21H

ret




