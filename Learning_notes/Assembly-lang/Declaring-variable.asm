
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt

org 100h

.DATA
; one thing i noticed is that the resultant ans cannot be > 9 , something to do with carry i think.
X DB 5
Y DB 4

.CODE

MAIN PROC
    MOV AX,@DATA
    MOV DS,AX
 
    MOV BL,X
    ADD BL,Y    
    ADD BL,48 ; CONVERTING TO ASCI FOR VISUAL
    
    MOV AH,2
    MOV DL,BL
    INT 21H
    
ret




