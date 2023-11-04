
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

    ;Note: why was L2 placed before L1 ?
    ;Thats because lets say its not placed and bl and cl is compared and bl > cl then JG L1 will be executed
    ;Which will jump the code to L1 and JMP will hault the code execution.
    ;Now if cl > bl then the jump will not get executed, the next line of code is L1 , after that
    ;The JMP will hault the code execution. So both both condition we will get bl as output.   
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




