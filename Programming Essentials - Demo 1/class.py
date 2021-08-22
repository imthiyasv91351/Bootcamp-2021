import math

class Person:

    def __init__(self, name, weight, height):
        self.name = name
        self.weight = weight
        self.height = height

    def calculateBMI(self):
        result = (self.weight) / ((self.height)**2)
        print("BMI of " + self.name + " is " + str(round(result,2)))
        

p1 = Person("Sam", 48, 1.5)
p2 = Person("Alex", 56, 1.4)


p1.calculateBMI()
p2.calculateBMI()