public class User implements Comparable<User>  {

    private int points;

    public User(int points) {
        this.points = points;
    }

    @Override
    public int compareTo(User other) {
        return points - other.points;
    }


    public static void run(){

        var user1 = new User(20);
        var user2 = new User(20);

        var result = Utils.max(user1,user2);
        System.out.println("--- result :: " + result);


        if (user1.compareTo(user2) < 0){
            System.out.println("--- user1 < user2");
        }else if(user1.compareTo(user2) == 0){
            System.out.println("--- user1 == user2");
        }else{
            System.out.println("--- user1 > user2");
        }

    }

    @Override
    public String toString() {
        return points + "";
    }
    
}
