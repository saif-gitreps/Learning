
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt
;PROGRAM TO PRINT HELLO WORLD.
org 100h
.DATA
    A DB 'Hello World$'        
.code
main proc
    MOV AX,@DATA
    MOV DS,AX
    
    LEA DX,A
    MOV AH,9
    INT 21H
    
ret




