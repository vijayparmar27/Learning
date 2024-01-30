package Build_In_Functional_Interface;

import java.util.function.Predicate;

/**
 * A predicate interface is a functional interface in Java that represents a
 * boolean condition. It has a single abstract method, test, that takes an
 * object as an argument and returns true or false.
 */
public class PredicateInterface {

    public static void show(String string) {
        Predicate<String> isLongerThan5 = str -> str.length() > 5;

        boolean result = isLongerThan5.test(string);

        System.out.println("--- PredicateInterface :: show :: " + result);

    }


    public static void combinePredicates(String string){
        Predicate<String> hasLeftBrace = str -> str.startsWith("{");
        Predicate<String> hasRigthBrace = str -> str.endsWith("}");

        Predicate<String> hasLeftAndRigth = hasLeftBrace.and(hasRigthBrace);

        boolean result = hasLeftAndRigth.test(string);
        System.out.println("---- PredicateInterface :: combinePredicates :: " + result);
    }

}
