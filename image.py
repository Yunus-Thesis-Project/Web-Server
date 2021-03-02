import cv2

im = cv2.VideoCapture(0)

while True:
    ret, frame = im.read()
    
    _, fencode = cv2.imencode('.JPEG', frame)
    print(fencode.tostring())
    
    cv2.imshow("vid", frame)
    cv2.waitKey(1)