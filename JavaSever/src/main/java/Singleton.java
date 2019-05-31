public class Singleton implements SingletonInterface{
    private static Singleton single_spark_instance;
//    public Singleton(){}

    public static Singleton getInstance()
    {
        if(single_spark_instance==null)
        {
            single_spark_instance = new SparkServer();
        }
        return single_spark_instance;
    }


    public void run() {
        single_spark_instance.run();
    }
}
