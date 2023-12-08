
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt

org 100h

MAIN PROC

    MOV AH,1
    INT 21H
    MOV BL,AL
    INT 21H
    MOV CL,AL

    SUB BL,32
    SUB CL,32        
            
    MOV AH,2
    MOV DL,32
    INT 21H
    MOV DL,BL
    INT 21H
    MOV DL,CL
    INT 21H

ret




