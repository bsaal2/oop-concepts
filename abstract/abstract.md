
# Abstract

## Abstract class

> We use abstract class to share the methods and properties that will be re-used in the derived classes

> Same could also be done by making the concrete class but the  major difference is we use abstract class
  when we do not need to instantiate the Base class.

> Abstract class can not be instantiated

> It throws the error in the compile time if we try to instantiate the Abstract class


## Abstract Method

> We normally define the abstract method by using the `abstract` keyword

> Abstract method is defined in the Abstract class. All the derived class from the Abstract method should compulsorily 
  implement the abstract method.

> Abstract method does not have any function implementation


## Virtual Method

> It is defined by the keyword `virtual`

> It is defined by placing the "= 0" in its declaration

> Alike Abstract method, it tells the derived class to implement this method. But
  Virtual method contains some default implementation.