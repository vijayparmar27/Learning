import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;


public class Streams {

    private static List<Movies> movies = List.of(
            new Movies("m1", 10, Genre.ACTION),
            new Movies("m3", 30, Genre.THRELLER),
            new Movies("m2", 20, Genre.COMEDY));

    public static void problemWantToSol() {
        List<Movies> movies = List.of(
                new Movies("m1", 10, Genre.ACTION),
                new Movies("m2", 20, Genre.COMEDY),
                new Movies("m3", 30, Genre.THRELLER));

        // Imperative Programing
        int count = 0;
        for (var movie : movies) {
            if (movie.getLikes() > 10)
                count++;
        }

        // Declaretive Programing
        var movieCount = movies.stream()
                .filter(m -> m.getLikes() > 10)
                .count();

        System.out.println("--- count :: " + count);
        System.out.println("--- movieCount :: " + movieCount);

    }

    public static void createSteam() {
        Collection<Integer> x;
        // x.stream();

        var list = new ArrayList<>();
        // list.stream();

        Integer[] numbers = { 1, 2, 3 };

        Arrays.stream(numbers)
                .forEach(n -> System.out.println(n));

        Stream.of(1, 2, 3).count();

        Stream.generate(() -> Math.random())
                .limit(3)
                // .forEach(n -> System.out.println(n));
                .forEach(System.out::println);

    }

    public static void mappingElement() {
        List<Movies> movies = List.of(
                new Movies("m1", 10, Genre.ACTION),
                new Movies("m2", 20, Genre.COMEDY),
                new Movies("m3", 30, Genre.THRELLER));

        movies.stream()
                .map(m -> m.getLikes())
                .forEach(System.out::println);
    }

    public static void filterElement() {
        List<Movies> movies = List.of(
                new Movies("m1", 10, Genre.ACTION),
                new Movies("m2", 20, Genre.COMEDY),
                new Movies("m3", 30, Genre.THRELLER));

        // movies.stream()
        // .filter(n -> n.getLikes() > 10)
        // .forEach(System.out::println);

        Predicate<Movies> isPopuler = m -> m.getLikes() > 10;

        movies.stream()
                .filter(isPopuler)
                .forEach(System.out::println);

    }

    public static void slicingStream() {
        List<Movies> movies = List.of(
                new Movies("m1", 10, Genre.ACTION),
                new Movies("m3", 30, Genre.THRELLER),
                new Movies("m2", 20, Genre.COMEDY));

        // movies.stream()
        // .limit(2)
        // .forEach(System.out::println);

        // movies.stream()
        // .skip(2)
        // .forEach(System.out::println);

        // movies.stream()
        // .takeWhile(n -> n.getLikes() < 30)
        // .forEach(System.out::println);

        movies.stream()
                .dropWhile(n -> n.getLikes() < 30)
                .forEach(System.out::println);
    }

    public static void sortingStream() {
        List<Movies> movies = List.of(
                new Movies("m1", 10, Genre.ACTION),
                new Movies("m3", 30, Genre.THRELLER),
                new Movies("m2", 20, Genre.COMEDY));

        movies.stream()
                // .sorted(Comparator.comparing(n -> n.getLikes()))
                // .sorted(Comparator.comparing(Movies::getLikes))
                .sorted(Comparator.comparing(Movies::getLikes).reversed())
                .forEach(System.out::println);
    }

    public static void UniqueElement() {
        List<Movies> movies = List.of(
                new Movies("m1", 10, Genre.ACTION),
                new Movies("m3", 30, Genre.THRELLER),
                new Movies("m1", 10, Genre.ACTION),
                new Movies("m2", 20, Genre.COMEDY));

        movies.stream()
                .map(m -> m.getLikes())
                .distinct()
                .forEach(System.out::println);
    }

    public static void peekingElement() {
        movies.stream()
                .filter(m -> m.getLikes() > 10)
                .peek(System.out::println)
                .map(Movies::getTitle)
                .peek(System.out::println)
                .forEach(System.out::println);

    }

    public static void simpleReducer() {
        movies.stream()
                .count();

        boolean isAllMath = movies.stream()
                .allMatch(m -> m.getLikes() > 10);

        boolean isAnyMath = movies.stream()
                .anyMatch(m -> m.getLikes() > 10);

        boolean isNoneMath = movies.stream()
                .noneMatch(m -> m.getLikes() > 10);

        Movies fistMovie = movies.stream()
                .findFirst()
                .get();

        Movies findAny = movies.stream()
                .findAny()
                .get();

        Movies findMax = movies.stream()
                .max(Comparator.comparing(Movies::getLikes))
                .get();

    }

    public static void reducingStream() {
        Optional<Integer> sum = movies.stream()
                .map(Movies::getLikes)
                .reduce((a, b) -> a + b);

        Integer sum1 = movies.stream()
                .map(Movies::getLikes)
                .reduce(Integer::sum)
                .orElse(0);
    }

    public static void collector() {
        var result = movies.stream()
                .filter(m -> m.getLikes() > 10)
                .collect(Collectors.toList());

        var result1 = movies.stream()
                .filter(m -> m.getLikes() > 10)
                // .collect(Collectors.toMap(Movies::getTitle, m -> m));
                .collect(Collectors.toMap(Movies::getTitle, Function.identity()));

        var result2 = movies.stream()
                .filter(m -> m.getLikes() > 10)
                .collect(Collectors.summarizingInt(Movies::getLikes));

    }

    public static void groupingElement() {
        movies.stream()
                .collect(Collectors.groupingBy(Movies::getGenre, Collectors.toSet()));
    }

    public static void partitioningElement() {
        var rusult = movies.stream()
                .collect(Collectors.partitioningBy(m -> m.getLikes() > 10,
                        Collectors.mapping(Movies::getTitle,
                                Collectors.joining(", "))));
    }

    public static void primitiveInt() {
        IntStream.range(1, 5)
                .forEach(System.out::println);
    }
}
