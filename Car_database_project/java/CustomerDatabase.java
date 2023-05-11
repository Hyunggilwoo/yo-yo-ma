import com.github.javafaker.Faker;


public class CustomerDatabase {
    public static void main(String[] args) {
        Faker faker = new Faker();

        for (int i = 0; i < 200; i++) {
            // Generate customer information
            String customerName = faker.name().fullName();
            String phoneNumber = faker.phoneNumber().cellPhone();
            String address = faker.address().streetAddress() + ", " + faker.address().city() + " " + faker.address().state() + " " + faker.address().zipCode();
            String email = faker.internet().emailAddress();

            // // Generate contact information
            // String contactName1 = faker.name().fullName();
            // String contactPhone1 = faker.phoneNumber().cellPhone();
            // String contact1 = contactName1 + " " + contactPhone1;

            // String contactName2 = faker.name().fullName();
            // String contactPhone2 = faker.phoneNumber().cellPhone();
            // String contact2 = contactName2 + " " + contactPhone2;

            // String contactName3 = faker.name().fullName();
            // String contactPhone3 = faker.phoneNumber().cellPhone();
            // String contact3 = contactName3 + " " + contactPhone3;

            // Build SQL statement
            String sql = "INSERT INTO Customers (Name, Address, Phone_Number, Email) VALUES (" +
                customerName + ", " + address + ", " + phoneNumber + ", " + email + ")";

            System.out.println(sql);
        }
    }
}
