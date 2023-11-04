
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt

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
    JG L1; IF BL > CL THEN L1 WILL EXECUTE.
       
    L2:
    MOV AH,2
    MOV DL,CL
    INT 21H
    JMP
    
    L1:
    MOV AH,2
    MOV DL,BL
    INT 21H
    JMP
    
ret




