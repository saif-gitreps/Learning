org 100h 

; PROGRAM TO COMPARE AND PRINT IF EQUAL OR NO.
org 100h
.DATA
    A DB 'EQUAL$'
    B DB 'NOT EQUAL$'         
.CODE
MAIN PROC
    MOV AX,@DATA
    MOV DS,AX
    
    MOV AH,1
    INT 21H
    MOV BL,AL
    INT 21H
    MOV CL,AL
 
    MOV AH,2
    MOV DL,032
    INT 21H
    
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




