package Build_In_Functional_Interface;

import java.util.function.BinaryOperator;
import java.util.function.Function;

public class BinaryInterface {

    public static void show(){
        BinaryOperator<Integer> add = (a,b) -> a + b;

        Function<Integer,Integer> square = a -> a * a;

        var result = add.andThen(square).apply(1, 2);

        System.out.println("---- BinaryInterface : show :: " + result);
    }
    
}
