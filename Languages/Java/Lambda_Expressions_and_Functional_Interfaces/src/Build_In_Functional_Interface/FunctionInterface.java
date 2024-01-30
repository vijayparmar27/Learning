package Build_In_Functional_Interface;

import java.util.function.Function;

public class FunctionInterface {

    public static void show() {

        Function<String, Integer> map = str -> str.length();

        var result1 = map.apply("null");

        // System.out.println(result1);

        /*
         * Composing Dunction
         */

         Function<String,String> replaceColom = str -> str.replace(":","=");

         Function<String,String> addBracces = str -> "{" + str + "}";

         String result = replaceColom.andThen(addBracces).apply("key:value");

         String result2 = addBracces.compose(replaceColom).apply("key:value");

        System.out.println(result2);


    }
}
