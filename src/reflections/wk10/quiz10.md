# C# Fundamentals


**1.** What is the purpose of a `namespace`?
<!-- enter you answer in the space below -->
```
Organizing code and providing scope to your scripts.
```
**2.** What is the difference between a `class` and a `struct`?
<!-- enter you answer in the space below -->
```
structs are value types rather than reference types, they cannot support inheritance, and cannot have nll references.
```
**3.** What is the method that returns an instance of a class, yet it has no return type?
<!-- enter you answer in the space below -->
```
You can simply return void.
```
## Example 1
```c#
abstract class Car
{
  ...
  public virtual string Start()
  {
    return "Vroooom";
  }
}
```
**5.** In the example what is the access modifier of the `Start()` method?
<!-- enter you answer in the space below -->
```
Public
```
**6.** In the example what is `string` an indication of?
<!-- enter you answer in the space below -->
```
It is the type that the method will be returning
```
**7.** In the example what is `abstract` preventing?
<!-- enter you answer in the space below -->
```
It's preventing any of its methods from being private.
```
**8.** In the example what is the purpose of `virtual`?
<!-- enter you answer in the space below -->
```
It allows other methods to be override methods. ????????????
```
**9.** Name four access modifiers:
<!-- enter you answer in the space below -->
```
Public, Private, Protected, Internal
```
**10.** If you set a class or method to private, what can access it?
<!-- enter you answer in the space below -->
```
It can only be accessed by code in the same class or struct.
```