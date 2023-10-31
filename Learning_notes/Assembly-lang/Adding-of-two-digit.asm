
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt
org 100h

; add your code here

MAIN PROC
    MOV AH,1 ;TAKING THE FIRST NUMBER AS INPUT
    INT 21H
    MOV BL,AL
    
    MOV AH,2 ; ADDING AN EMPTY SPACE AFTER FIRST INPUT.
    MOV DL,20H
    INT 21H
           
    MOV AH,1 ;TAKING THE SECOND NUMBER AS INPUT
    INT 21H
    MOV CL,AL
    
    ADD BL,CL ;ADDITION OPERATION , SUBTRACTING 48 BECAUSE OUR INPUT GETS CONVERTED TO ASCI,I 
    SUB BL,48 ;AFTER OPERATION OF TWO ASCI -= 48 GIVES DECIMAL OUTPUT.
    
    MOV AH,2
    MOV DL,0AH ;ADDING A NEW LINE
    INT 21H
    
    MOV AH,2
    MOV DL,0DH ;DL IS LIKE THIS VARIABLE WHERE WE KEEP IF WE WANT TO INPUT SOMETHING.
    INT 21H
    
    MOV AH,2  ;PRINTING RESULT.
    MOV DL,BL
    INT 21H

ret



