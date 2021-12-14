class Vector:

    def __init__(self, direction, magnitude):
        self.direction = direction
        self.magnitude = magnitude
    
    def vectorAdd(self, other):
        self.direction += other.direction
        self.magnitude += other.magnitude

    
        
