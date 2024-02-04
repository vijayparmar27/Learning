public class Movies {
    private String title;
    private int likes;
    private Genre genre;


    public Movies(String title, int likes , Genre genre){
        this.title = title;
        this.likes = likes;
        this.genre = genre;
    }

    @Override
    public String toString(){
        return 
            "title" + "=" + title + " " + 
            "likes" + "=" + likes + " " + 
            "genre" + "=" + genre; 
    }


    public String getTitle(){
        return title;
    }

    public void setTitle(String newTitle){
        title = newTitle;
    }

    public int getLikes(){
        return likes;
    }

    public void setLikes(int newLikes){
        likes = newLikes;
    }

    public Genre getGenre(){
        return genre;
    }

    public void setGenre(Genre newGenre){
        genre = newGenre;
    }

}
