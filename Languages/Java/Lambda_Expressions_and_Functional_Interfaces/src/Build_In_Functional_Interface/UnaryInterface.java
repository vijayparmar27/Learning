package Build_In_Functional_Interface;

import java.util.function.UnaryOperator;

/**
 * The UnaryOperator interface in Java is a functional interface that represents
 * an operation on a single operand that produces a result of the same type as
 * its operand
 */
public class UnaryInterface {

    public static void show(){
        UnaryOperator<Integer> square = a -> a * a;
        
        UnaryOperator<Integer> increament = a -> a + 1;

        var result = square.andThen(increament).apply(2);

        System.out.println("---- UnaryInterface : show :: "+ result);
    }

}
