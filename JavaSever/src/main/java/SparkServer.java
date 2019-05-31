import com.google.gson.Gson;
import spark.Spark;

import java.util.ArrayList;
import java.util.List;


import static spark.Spark.*;

public class SparkServer extends Singleton implements SingletonInterface{
    private List<Integer> temp;
    Gson gson = new Gson();

    public SparkServer(){port(8080);}

    public void run()
    {
        temp  = new ArrayList<>();
        temp.add(1);temp.add(2);temp.add(3);temp.add(4);

        Spark.get("/list",(request, response) -> {
            return gson.toJson(temp);
        });

        post("/data/:number",(request, response) ->
        {
            int num =  Integer.valueOf(request.params("number"));
            temp.add(num);
            return 200;
        });

    }
}
