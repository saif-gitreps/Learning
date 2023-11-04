
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt
; PROGRAM TO COMPARE AND PRINT IF EQUAL OR NO.
org 100h
.DATA
    A DB 'EQUAL$'
    B DB 'NOT EQUAL$'         
.code
main proc
    MOV AX,@DATA
    MOV DS,AX
    
    MOV AH,1
    INT 21H
    MOV BL,AL
    INT 21H
    MOV CL,AL
    
    CMP BL,CL
    JE L1
    JNE L2
    
    L1:
    LEA DX,A
    MOV AH,9
    INT 21H
    JMP
    
    L2:
    LEA DX,B
    MOV AH,9
    INT 21H
    JMP

ret




