import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import spark.Spark;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


import static spark.Spark.*;

public class SparkServer extends Singleton implements SingletonInterface{
    private List<Integer> temp;
    Gson gson = new Gson();

    public SparkServer(){port(5000);}

    public void run()
    {

        temp  = new ArrayList<>();
        temp.add(1);temp.add(2);temp.add(3);temp.add(4);


        //String finalTemporal = temporal;
        Spark.get("/Ilist",(req, res) -> {
            System.out.println("request made");

            BufferedReader br=null;
            try {
                br =new BufferedReader(
                        new FileReader("src/someJson.json")
                );
            }catch (IOException e)
            {
                e.printStackTrace();
            }
            JsonParser jsonParser = new JsonParser();
            JsonObject jsonObject = jsonParser.parse(br).getAsJsonObject();
//
            String send =gson.toJson(jsonObject);
            return send;
        });

        post("/data/:number",(request, response) ->
        {
            int num =  Integer.valueOf(request.params("number"));
            temp.add(num);
            return 200;
        });

    }
}
